function ProfileCard({ user }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
      {/* Avatar placeholder */}
      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-2xl font-bold">
        {user.name?.charAt(0).toUpperCase()}
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-600">
          <span className="font-medium">Role:</span>{" "}
          <span className="capitalize">{user.role}</span>
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;