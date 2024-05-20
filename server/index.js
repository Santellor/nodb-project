
//imports
import express from 'express'
import ViteExpress from 'vite-express'
import handlerFunctions from './controller.js'

//express instance
const app = express()
const port = 7777

//middleware
app.use(express.json())

//endpoints

    const {loadCalendar, newDate, removeDate, editDate, showNote, hideNote} = handlerFunctions

    //date handler functions
        // obtains "database" info for calendar
        app.get('/calendar', loadCalendar)

        // adds a new date to the calendar
        app.post('/calendar/new-date', newDate)

    //     // deletes a date, located with an id, from the calendar
        app.delete('/calendar/remove-date/:id', removeDate)

    //     // edits an existing date located with an id
        app.put('/calendar/edit-date/:id', editDate)

//open server
    ViteExpress.listen(app, port, () => console.warn(`therefore is online and running - http://localhost:7777`))
