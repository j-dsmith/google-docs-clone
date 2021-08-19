import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";

function DocumentRow({ id, fileName, date }) {
  const router = useRouter();

  return (
    <tr
      className="group cursor-pointer p-4"
      onClick={() => router.push(`/doc/${id}`)}
    >
      <td className="group-hover:bg-gray-100 p-4 rounded-l-lg">
        <div className="flex items-center text-gray-700">
          <Icon name="article" size="3xl" color="blue" />
          <p className="flex-grow pl-5 inline pr-10 truncate">{fileName}</p>
        </div>
      </td>
      <td className="group-hover:bg-gray-100">
        <p className="pr-5 text-sm">{date?.toDate().toLocaleDateString()}</p>
      </td>
      <td className="group-hover:bg-gray-100 rounded-r-lg">
        <Button
          color="gray"
          buttonType="outline"
          rounded={true}
          iconOnly={true}
          ripple="dark"
          className="border-0 text-center p-0 mx-auto"
        >
          <Icon name="more_vert" size="3xl" />
        </Button>
      </td>
    </tr>
  );
}

export default DocumentRow;
