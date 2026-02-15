const express = require("express")
const {getAllUser,addUser,gerUserById,deleteUserById,patchUserById} = require("./controller.js")


const router = express.Router()

router.route("/")
    .get(getAllUser)
    .post(addUser)


router.route("/:userid")
    .get(gerUserById)
    .delete(deleteUserById)
    .patch(patchUserById)


module.exports = router








//all types of task done in db
// Task	                            Method

// Create	                        create()
// Read	                            find(), findOne(), findById()
// Update	                        updateOne(), findByIdAndUpdate()
// Delete	                        deleteOne(), findByIdAndDelete()
// Count	                        countDocuments()
// Advanced	                        aggregate()
