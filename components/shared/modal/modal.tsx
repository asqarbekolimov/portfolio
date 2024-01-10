import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ProjectsProps } from '@/type';
import Link from 'next/link';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillGithub } from 'react-icons/ai';
import { TfiWorld } from 'react-icons/tfi';

export function Modal({ project, ...props }: ModalProps) {
  const { t } = useTranslation();
  return (
    <Dialog {...props}>
      <DialogTrigger asChild>
        <Button variant="outline">MORE INFO</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t(project.title, { ns: 'project' })}</DialogTitle>
          <DialogDescription className="text-justify">
            {t(project.description, { ns: 'project' })}
          </DialogDescription>
        </DialogHeader>
        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div> */}
        <div className="mt-3  flex flex-wrap gap-2">
          {project.skills.split(', ').map((c, id) => (
            <Badge key={id} className="flex items-center space-x-2">
              <p>{c}</p>
            </Badge>
          ))}
        </div>
        <DialogFooter className="space-x-0 sm:space-x-0 md:space-x-0">
          <div className="mt-5 flex flex-wrap gap-5">
            <Link href={project.link} target="_blank">
              <Button variant={'outline'} className="uppercase">
                <span className="mr-1">
                  <TfiWorld size={20} />
                </span>
                <span>{t('demo', { ns: 'project' })}</span>
              </Button>
            </Link>
            <Link href={project.repo} target="_blank">
              <Button variant={'outline'} className="uppercase">
                <span className="mr-1">
                  <AiFillGithub size={20} />
                </span>
                <span>{t('git_repo', { ns: 'project' })}</span>
              </Button>
            </Link>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export interface ModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  project: ProjectsProps;
}
