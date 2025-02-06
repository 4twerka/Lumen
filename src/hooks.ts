import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { useSearchParams } from 'react-router'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useQueryParam = (key:string) : string | null => {
    const [searchParams] = useSearchParams();
    return searchParams.get(key);
}