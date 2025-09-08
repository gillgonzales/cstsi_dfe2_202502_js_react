import { Avatar } from "./Avatar";
import Title from "./Title";

/* eslint-disable react/prop-types */
export function Profile({ user }) {
  return <>
    <Title content={user.name} link={user.wiki} />
    <Avatar user={user} />
  </>
}
