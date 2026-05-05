import { useFetchPhotosQuery,useAddPhotosMutation } from "../store"
import Button from "./Button";
import Skeleton from './Skeleton'
import PhotosListItem from "./PhotosListItem";

function PhotosList({album}){
    const {data,isFetching, error} = useFetchPhotosQuery(album);

    const [addPhotos, addPhotosResults] = useAddPhotosMutation();


    const handleAddPhotos = () => {
        addPhotos(album);
    }

    let content; 

    if(isFetching) {
        content = <Skeleton className="h-8 w-8" times={4}/>
    } else if(error) {
        content = <div>Error fetching photos...</div>
    } else {
        content = data.map(photo => {
            return <PhotosListItem key={photo.id} photo={photo}/>
        });
    }

    return <div>
        <div className="m-2 flex flex-row items-center justify-between">
            <h3 className="text-lg font-bold">Photos in {album.title}</h3>
            <Button loading={addPhotosResults.isLoading} onClick={handleAddPhotos}>
                + Add Photos
            </Button>

        </div>
        <div className="mx-8 flex flex-row flex-warp justify-center">
            {content}
        </div>
    </div>

}

export default PhotosList