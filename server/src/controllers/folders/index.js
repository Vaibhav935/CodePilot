import fs from "fs";
import path from "path";
import { customError, success } from "../../utils/response.utils.js";

export const createFolder = async (req, res) => {
  const { folderName } = req.body;
  const currentDir = path.resolve() + "/assets";

  fs.mkdir(`${currentDir}/${folderName}`, { recursive: true }, (err) => {
    if (err) {
      return customError(res, 500, {}, err.message, err);
    } else {
      return success(res, {}, "Folder created successfully");
    }
  });
};

export const readFolder = async (req, res) => {
  const { folderName } = req.query;
  console.log(folderName);
  const currentDir = path.resolve() + "/assets";

  fs.readdir(`${currentDir}/${folderName}`, (err, files) => {
    if (err) {
      return customError(res, 500, {}, err.message, err);
    } else {
      return success(res, { files }, "Folder contents retrieved successfully");
    }
  });
};

export const deleteFolder = async (req, res) => {
  const { folderName } = req.query;
  const currentDir = path.resolve() + "/assets";

  fs.rm(`${currentDir}/${folderName}`, { recursive: true }, (err) => {
    if (err) {
      return customError(res, 500, {}, err.message, err);
    } else {
      return success(res, {}, "Folder deleted successfully");
    }
  });
};

export const updateFolder = async (req, res) => {
  const { oldFolderName, newFolderName } = req.body;
  const currentDir = path.resolve() + "/assets";

  fs.rename(
    `${currentDir}/${oldFolderName}`,
    `${currentDir}/${newFolderName}`,
    (err) => {
      if (err) {
        return customError(res, 500, {}, err.message, err);
      }
      return success(res, {}, "Folder renamed successfully");
    },
  );
};
