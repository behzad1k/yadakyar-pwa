"use client"
import { useAppSelector } from '@/services/store';

export function Loading() {
  const loading = useAppSelector((state) => state.homeReducer.loading);

  if (loading) {
    return (
      <div className="loading-wrapper">
        <div className="loading-spinner">
          <div className="loading">
            <div></div>
          </div>
        </div>
      </div>
    );
  }
  else
    return null;
}
