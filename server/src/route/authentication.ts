import express from "express";

import { register } from "../Controllers/Auth";

export default (router: express.Router) => {
  router.post("/auth/register", register);
};
