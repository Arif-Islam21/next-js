export default function categoryesDetails({ params }) {
  if (params.features.length == 3) {
    return <div>{params.features[2]}</div>;
  }

  return <div>This is category details page</div>;
}
