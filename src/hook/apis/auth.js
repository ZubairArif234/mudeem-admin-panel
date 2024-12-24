import useSWR from "swr";
import { postFetcher } from ".";

function Profile() {
  const { data, error, isLoading } = useSWR("/api/user/123", postFetcher);
}
