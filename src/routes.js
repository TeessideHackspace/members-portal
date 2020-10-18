import { Router } from "@beyonk/sapper-rbac";

const routes = new Router()
  .restrict("/account.*", ["user"])
  .restrict("/trustee.*", ["trustee"])
  .restrict("/member.*", ["member"])
  .unrestrict(".*")
  .unrestrict("/login.*")
  .unrestrict("/index.*")
  .build();

export default routes;
