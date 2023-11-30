import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";

export function Sidebar() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  const MyLoader = () => (
    <ContentLoader
      width={250}
      speed={5}
      backgroundColor="#313131"
      foregroundColor="#181818"
    >
      <rect x="0" y="0" width="100%" height="100%" />
    </ContentLoader>
  );

  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            {isLoading ? (
              <MyLoader />
            ) : (
              <a className="sidebar__link" href="#">
                <img
                  className="sidebar__img"
                  src="img/playlist01.png"
                  alt="day's playlist"
                ></img>
              </a>
            )}
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              {isLoading ? (
                <MyLoader />
              ) : (
                <img
                  className="sidebar__img"
                  src="img/playlist02.png"
                  alt="day's playlist"
                ></img>
              )}
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              {isLoading ? (
                <MyLoader />
              ) : (
                <img
                  className="sidebar__img"
                  src="img/playlist03.png"
                  alt="day's playlist"
                ></img>
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
