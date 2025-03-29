import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Brain, Bookmark, Share2 } from 'lucide-react';

export function Features() {
  return (
    <section id="features" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Возможности</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Умный поиск</CardTitle>
            <CardDescription>
              Находите слова и их значения с помощью продвинутого поиска
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Обширная база</CardTitle>
            <CardDescription>Доступ к огромной базе слов и их значений</CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Bookmark className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Избранное</CardTitle>
            <CardDescription>Сохраняйте интересные слова для быстрого доступа</CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Share2 className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Делитесь</CardTitle>
            <CardDescription>Делитесь словами с друзьями через социальные сети</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
