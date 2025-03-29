'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useEffect, useState } from 'react';

export function ProjectGoalsModal() {
  const [open, setOpen] = useState(false);
  const [hasSeenBefore, setHasSeenBefore] = useState(false);

  useEffect(() => {
    // Проверяем, была ли уже показана модалка
    const hasShown = localStorage.getItem('projectGoalsShown');
    if (!hasShown) {
      setOpen(true);
      localStorage.setItem('projectGoalsShown', 'true');
    } else {
      //   setOpen(true);
      setHasSeenBefore(true);
    }
  }, []);

  const buttonText = hasSeenBefore ? 'Да-да, я помню 🙄' : 'Понятно';

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl bg-card shadow-lg border flex flex-col max-h-[90vh]">
        <DialogHeader className="border-b pb-4 flex-shrink-0">
          <DialogTitle className="text-xl md:text-2xl font-bold text-card-foreground">
            Цель проекта
          </DialogTitle>
          <DialogDescription className="text-sm md:text-base text-card-foreground/80">
            Dictionary создан как учебный проект для практики современных технологий и подходов к
            разработке.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 md:space-y-6 py-4 md:py-6 overflow-y-auto flex-grow">
          <h3 className="text-xl font-semibold text-card-foreground text-center">
            Используемые технологии и практики
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-card-foreground/90">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Next.js 15, TypeScript</span>
              </li>
              <li className="flex items-start gap-2 text-card-foreground/90">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>NestJS для API</span>
              </li>
              <li className="flex items-start gap-2 text-card-foreground/90">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>CockroachDB (SQL) + Prisma ORM</span>
              </li>
              <li className="flex items-start gap-2 text-card-foreground/90">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>JWT аутентификация</span>
              </li>
              <li className="flex items-start gap-2 text-card-foreground/90">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>React Query - кэширование</span>
              </li>
              <li className="flex items-start gap-2 text-card-foreground/90">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Zustand - стейт-менеджмент</span>
              </li>
              <li className="flex items-start gap-2 text-card-foreground/90">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Highcharts - визуализация</span>
              </li>
            </ul>

            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-card-foreground/90">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>CI/CD с GitLab</span>
              </li>
              <li className="flex items-start gap-2 text-card-foreground/90">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Менеджмент и интеграция с Jira</span>
              </li>
              <li className="flex items-start gap-2 text-card-foreground/90">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Локализация (i18n)</span>
              </li>
              <li className="flex items-start gap-2 text-card-foreground/90">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Геймификация процесса изучения</span>
              </li>
              <li className="flex items-start gap-2 text-card-foreground/90">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Zod - валидация форм</span>
              </li>
              <li className="flex items-start gap-2 text-card-foreground/90">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Day.js - работа с датами</span>
              </li>
            </ul>
          </div>

          <p className="text-card-foreground/80 text-center text-sm">и многое другое...</p>
        </div>

        <DialogFooter className="border-t pt-4 flex-shrink-0">
          <Button
            onClick={() => setOpen(false)}
            className="w-full sm:w-auto text-sm md:text-base px-3 py-2"
          >
            {buttonText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
