const convertSecondToTime = (seconds) => {
    let s = seconds % 60
    let m = Math.floor(seconds / 60)

    if (s < 10) s = "0" + s
    if (m < 10) m = "0" + m

    return m + ":" + s
}

class Stopwatch {
    count = 0;
    interval = null;
    isStarted = false;

    // UI render
    container;
    txtTime;
    btnStart;
    btnPause;

    constructor() {
        this.container = document.createElement("div")
        this.container.classList.add("stopwatch-container")

        this.txtTime = document.createElement("span")
        this.txtTime.innerHTML = "00:00"

        this.btnStart = document.createElement("button")
        this.btnStart.innerHTML = "Start"
        this.btnStart.addEventListener("click", this.handleStart)

        this.btnPause = document.createElement("button")
        this.btnPause.innerHTML = "Pause"
        this.btnPause.addEventListener("click", this.handlePause)

        this.container.appendChild(this.txtTime)
        this.container.appendChild(this.btnStart)
        this.container.appendChild(this.btnPause)
    }

    handleStart = () => {
        if (!this.isStarted) {
            this.interval = setInterval(() => {
                // run code
                this.count++;
                this.txtTime.innerHTML = convertSecondToTime(this.count)
            }, 1000)

            this.isStarted = true;
        } else {
            alert("Started!")
            return;
        }
    }

    handlePause = () => {
        clearInterval(this.interval)
        this.isStarted = false;
    }
}

export { Stopwatch }

