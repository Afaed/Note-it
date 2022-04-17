const fs = require("fs");
const path = require("path");

function createNote (){
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(
        pasth.join(_dirName, '../db/db.json'),
        JOSN.stringify({
            notes: notesArray
        },
        null, 2)
    )

    return note
}

function deleteNote(notesArray, id) {
    let deleteId= parseInt(id);
    notesArray.splice(deleteID, 1);

    for (let i = deleteId < notesArray.length; i++;){
        notesArray[i].id.id = i.toString();
    }

    fs.writeFileSync(
        path.join(_dirname, '../db/db.json'),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    )
}


module.exports = {
    createNote,
    deleteNote
};