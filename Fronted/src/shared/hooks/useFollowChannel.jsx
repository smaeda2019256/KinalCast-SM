import toast from "react-hot-toast";
import { followChannel as followChannelRequeast } from "../../services";

export const useFollowChannel = () => {
    const followChannel = async (channelId, onSucces) => {
        const responseData = await followChannelRequeast(channelId)

        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data ||
                'Ocurrio error al seguir el canal, intentelo luego mas tarde'
            )
        }
        toast.success('Canal seguido correctamente')
    }
    return{
        followChannel
    }
}
