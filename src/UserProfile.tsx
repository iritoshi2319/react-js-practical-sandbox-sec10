import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserPlofile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      {/* オプショナルチェイニングでnull対応 */}
      {/* joinメソッドで配列をスラッシュで繋ぐ */}
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};
