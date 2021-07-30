import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { mapActions } from '../../store/map-slice'
import axios from 'axios'

const Income = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/uber/react-map-gl/master/examples/.data/us-income.geojson')
            .then(res => {
                dispatch(mapActions.setData({ data: res.data }))
            })
            .catch(err => {
                dispatch(mapActions.setError({ error: err }))
            })
    }, [dispatch])

    return (
        <div></div>
    )
}

export default Income