import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

/**
 * Represents the 404 Page Not Found component.
 * This component is displayed when a user tries to access a non-existent page.
 *
 * @component
 */

const PageNotFound = () => {
  return (
    <main className="error">
      {/* Display the page header */}
      <PageHeader title="404 Page Not Found" description="Uh oh!" />

      <div className="error-description">
        <div className="row">
          <div className="col">
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;