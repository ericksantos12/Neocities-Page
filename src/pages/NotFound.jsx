import Layout from '../components/Layout.jsx';

export default function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Page Not Found</div>
        </div>
        <div className="window-body">
          <p>
            <a href="./">go back</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
