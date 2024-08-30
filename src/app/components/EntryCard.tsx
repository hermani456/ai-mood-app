const EntryCard = ({entry}) => {
  const date = new Date(entry.createdAt).toDateString();
  return (
    <div>
      {entry.content}
    </div>
  )
}

export default EntryCard