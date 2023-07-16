import usePlatforms from "./usePlatforms";

const getPlatform = (id: number | null) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((platform) => {
    return platform.id === id;
  });
};

export default getPlatform;
