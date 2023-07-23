// React
import React from "react";
// Components
import { EmptyState } from "./EmptyState";
// Libreries
import { AxiosError } from "axios";

interface ErrorProps {
  error: AxiosError;
}

/**
 * Functional component that render a error empty state.
 *
 * @return React.ReactNode <Error/>
 */
export function Error({ error }: ErrorProps) {
  return (
    <>
      {(error as AxiosError).response?.status !== 429 && (
        <EmptyState
          title="Server Error"
          description="Sorry we have an error on our server"
          icon="error"
        />
      )}
      {(error as AxiosError).response?.status === 429 && (
        <EmptyState
          title="API Limit Exceeded"
          description="Try again in a few minutes"
          icon="error"
        />
      )}
    </>
  );
}
