import Icon from "@material-tailwind/react/Icon";
import DocumentRow from "./DocumentRow";

function DocumentList({ snapshot }) {
  return (
    <section className="bg-white px-10  ">
      <div className="max-w-3xl mx-auto py-8">
        <table className="w-full text-sm text-gray-700">
          <thead>
            <tr className="text-left">
              <th className="font-medium w-2/3 ">My Documents</th>
              <th className="font-medium">Date Created</th>
              <th className="text-center">
                <Icon name="folder" size="3xl" color="gray" />
              </th>
            </tr>
          </thead>
          <tbody>
            {snapshot?.docs.map((doc) => (
              <DocumentRow
                key={doc.id}
                id={doc.id}
                fileName={doc.data().fileName}
                date={doc.data().timestamp}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default DocumentList;
