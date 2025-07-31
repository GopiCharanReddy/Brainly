import { Request, Response } from "express";
import { Content } from "../models/content.models";
import { User } from "../models/user.models";
import { Link } from "../models/link.models";
import shortid from "shortid";

const shareLink = async (req: Request, res: Response) => {
  const { share } = req.body;
  if (share) {
    const hash = shortid.generate();
    await Link.create({
      hash,
      userId: req.userId,
    });
    res.status(200).json({
      hash,
      message: "Share Link generated successfully.",
    });
    return;
  } else {
    const {hash} = req.body
    await Link.deleteOne({
      userId: req.userId,
      hash,
    });
    res.json({
      message: "Link removed successfully.",
    });
  }
};

const sharedLink = async (req: Request, res: Response) => {
  const hash = req.params.shareLink;
  console.log(hash);
  const link = await Link.findOne({
    hash,
  });
  if (!link) {
    res.status(411).json("Link not found.");
    return;
  }
  console.log(link);

  const content = await Content.findOne({
    userId: link.userId,
  });

  const user = await User.findOne({
    _id: link.userId,
  });

  if (!user) {
    res.status(404).json({ message: "User not found." });
  }

  res.json({
    username: user?.username,
    content: content,
  });
};

export { shareLink, sharedLink };
