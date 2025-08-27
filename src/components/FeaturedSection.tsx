"use client";

export default function FeaturedSection() {
  return (
    <section className="p-6 md:p-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Рекомендовані</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {/* Тут потім зробимо карти */}
        <div className="h-40 bg-gray-800 rounded-lg"></div>
        <div className="h-40 bg-gray-800 rounded-lg"></div>
        <div className="h-40 bg-gray-800 rounded-lg"></div>
      </div>
    </section>
  );
}
