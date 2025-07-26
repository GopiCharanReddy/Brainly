import { Request, Response } from "express";
import { Content } from "../models/content.models";
import { User } from "../models/user.models";
import { Link } from "../models/link.models"

const shareLink = async (req: Request, res: Response) => {
  const { share } = req.body;
  if (share) {
      const existingUser = await User.findOne({
    //@ts-ignore
    userId: req.userId,
  });
  if (!existingUser) {
    const hash = Math.random();
    await Link.create({
      //@ts-ignore
      userId: req.userId,
      hash: hash,
    });
  } else {
    res.json({
      //@ts-ignore
      hash: existingUser.hash,
    });
    return;
  }

  res.status(200).json({
    //@ts-ignore
    hash,
    message: "Share link generated successfully.",
  });
    return;
  } else {
    await Link.deleteOne({
      //@ts-ignore
      userId: req.userId,
    })
    res.json({message: "Share link removed successfully."})
  }
};

const sharedLink = async (req: Request, res: Response) => {
  const hash = req.params.link

  const link =  await Link.findOne({
    hash
  })

  if(!link) {
    res.status(411).json("Link not found.")
    return;
  }
  
  const content = await Content.findOne({
    userId: link.userId
  })
  
  const user = await User.findOne({
    _id: link.userId
  })

  if(!user) {
    res.status(404).json({message: "User not found."})
  }

  res.json({
    username: user?.username,
    content: content
  })
};

export { shareLink, sharedLink };
