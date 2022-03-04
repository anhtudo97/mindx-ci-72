import { Stopwatch } from './Stopwatch.js'

const stopwatchContainer = document.querySelector("#stopwatch")

const btnAddStopwatch = document.querySelector("#addStopwatch")

btnAddStopwatch.addEventListener("click", () => {
    const stopwatch = new Stopwatch()
    stopwatchContainer.appendChild(stopwatch.container)
    stopwatchContainer.appendChild(div)
})

