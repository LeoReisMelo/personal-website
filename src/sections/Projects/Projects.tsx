import { ArrowUpRight, Code2, ExternalLink, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "../../components/Container/Container";
import { useI18n } from "../../i18n/I18nProvider";
import {
  ComingSoonBadge,
  ComingSoonCard,
  ComingSoonCards,
  ComingSoonDot,
  ComingSoonGrid,
  ComingSoonLine,
  ComingSoonVisual,
  ComingSoonWindow,
  ComingSoonWindowBody,
  ComingSoonWindowHeader,
  Description,
  Eyebrow,
  EyebrowDot,
  Header,
  HeaderCopy,
  Highlight,
  Modal,
  ModalClose,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
  Project,
  ProjectContent,
  ProjectDescription,
  ProjectImage,
  ProjectImageWrapper,
  ProjectLink,
  ProjectLinks,
  ProjectNumber,
  ProjectsList,
  ProjectTitle,
  Section,
  Technologies,
  Technology,
  Title,
  ViewAll,
  VisualGlow,
} from "./styles";
import { projects } from "../../utils/constants/projects";

const MAX_VISIBLE_PROJECTS = 3;

export function Projects() {
  const { t } = useI18n();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const visibleProjects = projects.slice(0, MAX_VISIBLE_PROJECTS);

  const hasMoreProjects = projects.length > MAX_VISIBLE_PROJECTS;

  useEffect(() => {
    if (!isModalOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <Section id="projects">
        <Container>
          <Header>
            <HeaderCopy>
              <Eyebrow>
                <EyebrowDot />
                {t.projects.eyebrow}
              </Eyebrow>
              <Title>
                {t.projects.title} <Highlight>{t.projects.highlight}</Highlight>
              </Title>
              <Description>{t.projects.description}</Description>
            </HeaderCopy>
            {projects.length > 0 && (
              <ViewAll
                as="button"
                type="button"
                onClick={() => setIsModalOpen(true)}
              >
                {hasMoreProjects ? t.projects.viewAll : t.projects.action}
                <ArrowUpRight size={16} />
              </ViewAll>
            )}
          </Header>
          {projects.length > 0 ? (
            <ProjectsList>
              {visibleProjects.map((project) => (
                <Project key={project.number}>
                  <ProjectImageWrapper>
                    <VisualGlow />
                    <ProjectImage
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                  </ProjectImageWrapper>
                  <ProjectContent>
                    <ProjectNumber>
                      {t.projects.projectLabel} / {project.number}
                    </ProjectNumber>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>
                    <Technologies>
                      {project.technologies.map((technology) => (
                        <Technology key={technology}>{technology}</Technology>
                      ))}
                    </Technologies>
                    <ProjectLinks>
                      <ProjectLink
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Code2 size={15} />
                        {t.projects.links.sourceCode}
                      </ProjectLink>
                      {project.liveUrl && (
                        <ProjectLink
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={15} />
                          {t.projects.links.liveProject}
                        </ProjectLink>
                      )}
                    </ProjectLinks>
                  </ProjectContent>
                </Project>
              ))}
            </ProjectsList>
          ) : (
            <ProjectsList>
              <Project>
                <ProjectImageWrapper>
                  <VisualGlow />
                  <ComingSoonVisual>
                    <ComingSoonGrid />
                    <ComingSoonWindow>
                      <ComingSoonWindowHeader>
                        <ComingSoonDot />
                        <ComingSoonDot />
                        <ComingSoonDot />
                      </ComingSoonWindowHeader>
                      <ComingSoonWindowBody>
                        <ComingSoonLine $width="70%" />
                        <ComingSoonLine $width="45%" />
                        <ComingSoonLine $width="85%" />
                        <ComingSoonCards>
                          <ComingSoonCard />
                          <ComingSoonCard />
                        </ComingSoonCards>
                      </ComingSoonWindowBody>
                    </ComingSoonWindow>
                    <ComingSoonBadge>
                      <span>+</span>
                      {t.projects.comingSoon.label}
                    </ComingSoonBadge>
                  </ComingSoonVisual>
                </ProjectImageWrapper>
                <ProjectContent>
                  <ProjectNumber>{t.projects.comingSoon.label}</ProjectNumber>
                  <ProjectTitle>{t.projects.comingSoon.title}</ProjectTitle>
                  <ProjectDescription>
                    {t.projects.comingSoon.description}
                  </ProjectDescription>
                  <ProjectLinks>
                    <ProjectLink href="#contact">
                      <ArrowUpRight size={15} />
                      {t.projects.comingSoon.action}
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectContent>
              </Project>
            </ProjectsList>
          )}
        </Container>
      </Section>
      {isModalOpen && (
        <ModalOverlay onClick={() => setIsModalOpen(false)}>
          <Modal onClick={(event) => event.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>{t.projects.modal.title}</ModalTitle>
              <ModalClose
                type="button"
                aria-label={t.projects.modal.close}
                onClick={() => setIsModalOpen(false)}
              >
                <X size={20} />
              </ModalClose>
            </ModalHeader>
            <ModalContent>
              <ProjectsList>
                {projects.map((project) => (
                  <Project key={project.number}>
                    <ProjectImageWrapper>
                      <VisualGlow />
                      <ProjectImage
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                      />
                    </ProjectImageWrapper>
                    <ProjectContent>
                      <ProjectNumber>
                        {t.projects.projectLabel} / {project.number}
                      </ProjectNumber>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ProjectDescription>
                        {project.description}
                      </ProjectDescription>
                      <Technologies>
                        {project.technologies.map((technology) => (
                          <Technology key={technology}>{technology}</Technology>
                        ))}
                      </Technologies>
                      <ProjectLinks>
                        <ProjectLink
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Code2 size={15} />
                          {t.projects.links.sourceCode}
                        </ProjectLink>
                        {project.liveUrl && (
                          <ProjectLink
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={15} />
                            {t.projects.links.liveProject}
                          </ProjectLink>
                        )}
                      </ProjectLinks>
                    </ProjectContent>
                  </Project>
                ))}
              </ProjectsList>
            </ModalContent>
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
}
