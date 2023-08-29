import cl from "./Reviews.module.css"

export default function Reviews({ reviews }) {
    return (
      <div className={cl.container}>
        <ul className={cl.list}>
          {reviews.map(({ id, author, content }) => (
            <li className={cl.li} key={id}>
              <p className={cl.author}>{author}</p>
              <p className={cl.content}>{content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }