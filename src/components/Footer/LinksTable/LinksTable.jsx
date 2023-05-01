import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const LinksTable = () => {
  return (
    <div className="">
      <Table responsive="sm" borderless={true} size="sm">
        <thead>
          <tr>
            <th>
              {" "}
              <Link className="link" to="services">
                Buying{" "}
              </Link>
            </th>
            <th>
              {" "}
              <Link className="link" to="services">
                Financing{" "}
              </Link>
            </th>
            <th>
              {" "}
              <Link className="link" to="services">
                Selling{" "}
              </Link>
            </th>
            <th>
              {" "}
              <Link className="link" to="services">
                Home Services{" "}
              </Link>
            </th>
            <th>
              <Link className="link" to="properties">
                Properties{" "}
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link className="link" to="services">
                Personal Home
              </Link>
            </td>
            <td>
              <Link className="link" to="services">
                Bank Loans
              </Link>
            </td>
            <td>
              <Link className="link" to="services">
                Explore Options
              </Link>
            </td>
            <td>
              <Link className="link" to="services">
                Home Estimate
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link className="link" to="services">
                Investment Property
              </Link>
            </td>
            <td></td>
            <td>
              <Link className="link" to="services">
                Find Agent
              </Link>
            </td>
            <td>
              <Link className="link" to="services">
                Home inspection
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link className="link" to="services">
                Commercial Real Estate
              </Link>
            </td>
            <td></td>
            <td>
              <Link className="link" to="services">
                Post for Sale
              </Link>
            </td>
            <td>
              <Link className="link" to="services">
                Cleaning
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default LinksTable;
