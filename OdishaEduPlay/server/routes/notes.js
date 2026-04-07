import express from "express";
import multer from "multer";
import Note from "../models/Note.js";
import { protect, requireRole } from "../middleware/auth.js";

const router = express.Router();

// Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/notes"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// 📌 Upload note (Teacher only)
router.post("/", protect, requireRole("teacher"), upload.single("file"), async (req, res) => {
  try {
    const note = new Note({
      title: req.body.title,
      className: req.body.className,
      subject: req.body.subject,
      filePath: req.file.path,
      uploadedBy: req.user._id,
    });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 📌 Get all notes (Students + Teachers)
router.get("/", protect, async (req, res) => {
  try {
    const notes = await Note.find().populate("uploadedBy", "name role");
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
