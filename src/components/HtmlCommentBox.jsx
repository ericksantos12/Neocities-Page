import { useEffect } from 'react';

export default function HtmlCommentBox() {
  useEffect(() => {
    if (document.getElementById('hcb')) {
      return;
    }

    window.hcb_user = window.hcb_user || {};
    const page = window.hcb_user.PAGE || `${window.location}`.replace(/'/g, '%27');
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'hcb';
    script.src = `https://www.htmlcommentbox.com/jread?page=${encodeURIComponent(page).replace('+', '%2B')}&mod=%241%24wq1rdBcg%24qWpb5%2FvT2iocheHft7Lc01&opts=16798&num=10&ts=1662859279947`;
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <div id="HCB_comment_box">
        <a href="http://www.htmlcommentbox.com">Comment Form</a> is loading comments...
      </div>
      <link rel="stylesheet" type="text/css" href="https://www.htmlcommentbox.com/static/skins/bootstrap/twitter-bootstrap.css?v=0" />
    </>
  );
}
