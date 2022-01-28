const express = require("express");
const {
  getNotes,
  createNote,
  getNoteById,
  DeleteNote,
  UpdateNote,
} = require("../controller/noteController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getNotes);
router
  .route("/:id")
  .get(getNoteById)
  .delete(protect, DeleteNote)
  .put(protect, UpdateNote);
router.route("/create").post(protect, createNote);


module.exports = router;
