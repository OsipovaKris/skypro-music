export function Track() {
  const trackItem = [
    //потом здесь будет весь список треков
    {
      title: "Guilt",
      subtitle: null,
      author: "Nero",
      album: "Welcome Reality",
      time: "4:44",
    },
    {
      title: "Elektro",
      subtitle: null,
      author: "Dynoro, Outwork, Mr. Gee",
      album: "Elektro",
      time: "2:22",
    },
    {
      title: "I’m Fire",
      subtitle: null,
      author: "Ali Bakgor",
      album: "I’m Fire",
      time: "2:22",
    },
    {
      title: "Non Stop",
      subtitle: "(Remix)",
      author: "Стоункат, Psychopath",
      album: "Non Stop",
      time: "4:12",
    },
    {
      title: "Run Run",
      subtitle: "(feat. AR/CO)",
      author: "Jaded, Will Clarke, AR/CO",
      album: "Run Run",
      time: "2:54",
    },
  ];

  return (
    <div className="content__playlist playlist">
      {trackItem.map((text) => (
        <div className="playlist__item">
          <div className="playlist__track track">
            <div className="track__title">
              <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div className="track__title-text">
                <a className="track__title-link" href="http://">
                  {text.title}
                  <span className="track__title-span">{text.subtitle}</span>
                </a>
              </div>
            </div>
            <div className="track__author">
              <a className="track__author-link" href="http://">
                {text.author}
              </a>
            </div>
            <div className="track__album">
              <a className="track__album-link" href="http://">
                {text.album}
              </a>
            </div>
            <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </svg>
              <span className="track__time-text">{text.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
