import { categories } from "@/data/categories";
import { CategoryCard } from "@/components/category-card";
import { SectionHeading } from "@/components/shared/section-heading";

export function CategorySection() {
  return (
    <section className="container-app py-14 sm:py-20" aria-label="Layanan klinik">
      <SectionHeading
        title="Layanan Kami"
        description="Berbagai layanan kesehatan untuk kebutuhan Anda dan keluarga"
        className="mb-10"
      />
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-6">
        {categories.map((category, index) => (
          <CategoryCard key={category.id} category={category} index={index} />
        ))}
      </div>
    </section>
  );
}
