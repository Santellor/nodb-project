// Starting Data
let calendarData =[
    { date: "Thursday, May 16, 2024", id: 1, sleep: 6, exer: 30, food: 3, moodH:8, moodL:3,  notes: "look at that"},
    { date: "Friday, May 17, 2024", id: 2, sleep: 7, exer: 60, food: 3, moodH:8, moodL:7,  notes: "notes are here"},
    { date: "Saturday, May 18, 2024", id: 3, sleep: 9, exer: 70, food: 2, moodH:8, moodL:4,  notes: "and we can edit them"},
    { date: "Sunday, May 19, 2024", id: 4, sleep: 6, exer: 30, food: 3, moodH:9, moodL:7,  notes: "pretty neat"},
    ];
   
//Establish unique ID
    let globalId = 5

//Endpoint functions
const handlerFunctions ={

    // Get to gather data and send it to the browser
    loadCalendar: (req, res) => {
        res.status(200).send(calendarData)
    },
    // Post to get a new date row
    newDate: (req, res) => { 
        const dateEntry = req.body

        let today = new Date()
  

        //format today's date into a human-friendly format
        let fullDate = new Intl.DateTimeFormat(
          'en-US',
          {dateStyle: 'full',}).format(today)
        dateEntry.date = fullDate
        dateEntry.id = globalId

        calendarData.push(dateEntry)

        globalId++

        res.status(200).send(dateEntry)

    },
    // Delete to remove a date
    removeDate: (req, res) => {
        const {id} = req.params

        calendarData = calendarData.filter((el) => el.id !== +id)

        res.status(200).send(calendarData)

    },
    // Put to remove the old value of a date and add an updated one
    editDate: (req, res) => {
        const {id} = req.params
        const editElement = req.body

        editElement.id = +id
        editElement.isEditing = false

        calendarData = calendarData.map((el) => el.id === +id ?
        el = editElement : 
        el = el)

        res.status(200).send(calendarData)
    },
    // showNote: () => {},
    // hideNote: () => {}
}

export default handlerFunctions 