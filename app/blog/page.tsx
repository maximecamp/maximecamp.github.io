import ArticleList from '@/components/Articles/All/List'
import { blogpage_text } from '@/data/blogpage'
import { data as footerContactData } from '@/data/footercontact'
import ContactCard from '@/components/ContactCard'

export default function BlogPage() {
  return (
    <>
      <section>
        {/* Page header */}
        <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
            {blogpage_text.header.title}
        </h2>
        <div className="space-y-1">
          <ArticleList />
        </div>
      </section>
      <ContactCard data={footerContactData}/>
    </>
  )
}