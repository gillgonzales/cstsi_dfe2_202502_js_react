/* eslint-disable react/prop-types */

export function Avatar({user}) {
  return (
    <a href={user.wiki}>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Foto de ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </a>
  );
}