import { Request, Response } from "express";
import { Content } from "../models/content.models";

const postContent = async (req: Request, res: Response) => {
  const { title, link, type } = req.body;
  if (!link || !title) {
    res.status(411).json({ message: "All fields are required." });
    return;
  }
  await Content.create({
    link,
    title,
    type,
    userId: req.userId,
    tags: [],
  });
  res.status(200).json({ message: "Content added successfully." });
  return;
};

const getContent = async (req: Request, res: Response) => {
  const userId = req.userId;
  if (!userId) {
    res.json({ message: "User not found." });
  }
  const content = await Content.find({
    userId: userId,
  }).populate("userId", "username");

  res.json({
    content,
  });
};

const deleteContent = async (req: Request, res: Response) => {
  const { contentId } = req.body;
  if (!contentId) {
    res.status(411).json({ message: "Content not found." });
    return;
  }
  const deleteResult = await Content.deleteOne({
    _id: contentId,
    userId: req.userId,
  });
  if (deleteResult.deletedCount === 0) {
    return res
      .status(404)
      .json({ message: "Content not found or user not authorized." });
  }
  res.status(200).json({ message: "Content deleted successfully." });
};
export { postContent, getContent, deleteContent };
