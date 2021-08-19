import Icon from "@material-tailwind/react/Icon";

function DocumentList() {
  return (
    <section className="bg-white px-10 md:px-0">
      <div className="max-w-3xl mx-auto py-8">
        <table className="w-full text-left text-sm text-gray-700">
          <thead>
            <tr className="">
              <th className="font-medium w-2/3 ">My Documents</th>
              <th className="font-medium">Date Created</th>
              <th className="">
                <Icon name="folder" size="3xl" color="gray" />
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </section>
  );
}

export default DocumentList;
