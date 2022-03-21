import { Composer } from "../chat/composer.js";
import { ConversationInfo } from "../chat/conversationInfo.js";
import { ConversationList } from "../chat/conversationList.js";
import { MessageList } from "../chat/messageList.js";
import { UserList } from "../chat/userList.js";

class Chat {
  activeConversation;
  subcribeConversationMessages = null;

  container = document.createElement("div");
  btnLogout = document.createElement("button");

  conversationList = new ConversationList();
  conversationInfor = new ConversationInfo();

  composer = new Composer();
  messageList = new MessageList();
  userList = new UserList();

  constructor() {
    this.container.appendChild(this.conversationList.container);
    this.conversationList.setOnConversationItemClick(
      this.setActiveConversation
    );
    this.container.appendChild(this.conversationInfor.container);
    this.container.appendChild(this.composer.container);
    this.container.appendChild(this.messageList.container);
    this.container.appendChild(this.userList.container);
    this.subcribeConversation();
  }

  setActiveConversation = (conversation) => {
    this.activeConversation = conversation;
    this.conversationInfor.setName(conversation.name);
    this.conversationList.setStyleActiveConversation(conversation);

    this.composer.setActiveConversation(conversation);
    this.userList.setActiveConversation(conversation);

    this.messageList.clearMessage();

    this.subcribeConversationMessageList();
  };

  subcribeConversation = () => {
    db.collection("conversations").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log("New conversation: ", change.doc.data());

          this.conversationList.handleCreateConversationAdded(
            change.doc.id,
            change.doc.data().name,
            change.doc.data().users
          );
        }
        if (change.type === "modified") {
          console.log("Modified conversation: ", change.doc.data());
        }
        if (change.type === "removed") {
          console.log("Removed conversation: ", change.doc.data());
          this.conversationList.removedItem(change.doc.id);
        }
      });
    });
  };

  // listener
  subcribeConversationMessageList = () => {
    if (this.subcribeConversationMessages !== null) {
      this.subcribeConversationMessages();
    }

    // Connect to listen
    this.subcribeConversationMessages = db
      .collection("messages")
      .where("conversationId", "==", this.activeConversation.id)
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          this.messageList.addMessage(change.doc.data());
        });
      });
    // => Function()
  };
}

export { Chat };