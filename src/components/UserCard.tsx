import React from "react";

interface UserCardProps {
  name: string;
  age: number;
  email: string;
}

export default function UserCard({ name, age, email }: UserCardProps) {
  return (
    <div>
      <p>{`Name: ${name}`}</p>
      <p>{`Age: ${age}`}</p>
      <p>{`Email: ${email}`}</p>
    </div>
  );
}
