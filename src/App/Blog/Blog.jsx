import './style.css';
<link
  href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,700&family=Roboto:ital,wght@1,400;1,700&display=swap"
  rel="stylesheet"
></link>;

export const Blog = () => {
  return (
    <div>
      <p className="data">30-11-2022</p>
      <h1 className="title">Why are we so nostalgic for the 1990s?</h1>
      <p className="content">
        Pop culture used to define a generation, but it seems the cultural music
        and fashion trends of the 1990s haven been recycled, and what Generation
        X considered its rite of passage into adulthood, is being discoverd and
        claimed by fledgling grown-ups as their own
      </p>
      <p className="content">
        There's been the resurgence of vinyl as the trend-setters' choice of
        music consumption rather than the ease of a digital download, and now
        the hipster have discoverd the nostalgic sound of a whirring cassette
        from which to enjoy the dulcet tones of everyone from Salt-N-Pepa to
        Rick Astley
      </p>
      <p className="name">Radosława Majdan</p>
      <p className="position">Senior Marketing Specalist</p>
    </div>
  );
};
