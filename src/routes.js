import { Router } from "@beyonk/sapper-rbac";

const routes = new Router()
  .restrict("/account.*", ["user"])
  .restrict("/trustees.*", ["trustee"])
  .restrict("/members.*", ["customer"])
  .unrestrict(".*")
  .unrestrict("/login.*")
  .unrestrict("/index.*")
  .build();

export default routes;
