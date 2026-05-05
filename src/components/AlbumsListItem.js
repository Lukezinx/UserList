import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { useAddAlbumMutation } from "../store";
import PhotosList from "./PhotosList";


function AlbumsListItem({album}) {
    const [removeAlbum, result] = useAddAlbumMutation();


    const handleRemoveAlbum = () => {
        removeAlbum(album)
    }


    const header = <div>
        <Button loading={result.isLoading} onClick={handleRemoveAlbum}> 
            <GoTrashcan/> 
        </Button>
        {album.title}
        </div>

    return <ExpandablePanel key={album.id} header={header}>
        <PhotosList album={album}/>
        </ExpandablePanel>
}

export default AlbumsListItem