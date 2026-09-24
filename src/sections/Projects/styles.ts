import styled from "styled-components";

const Section = styled.section`
  position: relative;

  width: 100%;

  padding: 8rem 0;

  overflow: hidden;

  background: var(--color-background-alt);
`;

const Header = styled.div`
  display: flex;

  align-items: flex-end;
  justify-content: space-between;

  gap: 3rem;

  margin-bottom: 5rem;

  @media (max-width: 800px) {
    flex-direction: column;

    align-items: flex-start;
  }
`;

const HeaderCopy = styled.div`
  max-width: 760px;
`;

const Eyebrow = styled.div`
  display: inline-flex;

  align-items: center;

  gap: 0.6rem;

  margin-bottom: 1.5rem;

  color: var(--color-brand);

  font-family: var(--font-mono);

  font-size: 0.72rem;

  font-weight: 600;

  letter-spacing: 0.08em;

  text-transform: uppercase;
`;

const EyebrowDot = styled.span`
  width: 7px;

  height: 7px;

  border-radius: 50%;

  background: var(--color-brand);

  box-shadow: 0 0 0 5px var(--color-brand-soft);
`;

const Title = styled.h2`
  color: var(--color-text);

  font-size: clamp(2.75rem, 5vw, 5rem);

  font-weight: 700;

  letter-spacing: -0.06em;

  line-height: 0.98;
`;

const Highlight = styled.span`
  color: var(--color-brand);
`;

const Description = styled.p`
  max-width: 600px;

  margin-top: 1.5rem;

  color: var(--color-text-muted);

  font-size: 1rem;

  line-height: 1.8;
`;

const ViewAll = styled.button`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.5rem;
  border: 0;
  padding: 0;
  background: transparent;
  color: var(--color-text);
  font: inherit;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    color var(--transition-fast),
    gap var(--transition-fast);

  &:hover {
    gap: 0.75rem;
    color: var(--color-brand);
  }

  &:focus-visible {
    outline: 2px solid var(--color-brand);
    outline-offset: 6px;
    border-radius: 4px;
  }
`;

const ProjectsList = styled.div`
  display: flex;

  flex-direction: column;

  gap: 2rem;
`;

const Project = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
  min-height: 500px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  background: var(--color-surface);
  transition:
    border-color var(--transition-normal),
    transform var(--transition-normal),
    box-shadow var(--transition-normal);

  &:hover {
    border-color: var(--color-border-hover);
    transform: translateY(-4px);
    box-shadow: 0 24px 60px rgb(0 0 0 / 8%);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectVisual = styled.div`
  position: relative;

  min-height: 500px;

  overflow: hidden;

  background: var(--color-background);

  border-right: 1px solid var(--color-border);

  @media (max-width: 900px) {
    min-height: 380px;

    border-right: 0;

    border-bottom: 1px solid var(--color-border);
  }
`;

const VisualGrid = styled.div`
  position: absolute;

  inset: 0;

  background-image:
    linear-gradient(to right, var(--color-border) 1px, transparent 1px),
    linear-gradient(to bottom, var(--color-border) 1px, transparent 1px);

  background-size: 56px 56px;

  opacity: 0.45;
`;

const VisualWindow = styled.div`
  position: absolute;

  top: 50%;

  left: 50%;

  width: min(78%, 460px);

  transform: translate(-50%, -50%);

  overflow: hidden;

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);

  background: var(--color-surface);

  box-shadow: 0 30px 70px rgb(0 0 0 / 12%);
`;

const WindowHeader = styled.div`
  display: flex;

  align-items: center;

  gap: 0.45rem;

  height: 38px;

  padding: 0 1rem;

  border-bottom: 1px solid var(--color-border);
`;

const WindowDot = styled.span`
  width: 7px;

  height: 7px;

  border-radius: 50%;

  background: var(--color-border);
`;

const WindowBody = styled.div`
  display: grid;

  min-height: 250px;

  grid-template-columns: 72px 1fr;
`;

const WindowSidebar = styled.div`
  border-right: 1px solid var(--color-border);

  background: var(--color-background-alt);
`;

const WindowMain = styled.div`
  padding: 1.5rem;
`;

const WindowLine = styled.div<{ $width: string }>`
  width: ${({ $width }) => $width};

  height: 8px;

  margin-bottom: 0.75rem;

  border-radius: 999px;

  background: var(--color-border);
`;

const WindowMetric = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 0.75rem;

  margin-top: 2rem;
`;

const Metric = styled.div`
  min-height: 75px;

  padding: 1rem;

  border: 1px solid var(--color-border);

  border-radius: var(--radius-md);

  background: var(--color-background);
`;

const MetricValue = styled.div`
  color: var(--color-text);

  font-size: 1.25rem;

  font-weight: 700;
`;

const MetricLabel = styled.div`
  margin-top: 0.3rem;

  color: var(--color-text-muted);

  font-size: 0.65rem;
`;

const ProjectContent = styled.div`
  display: flex;

  flex-direction: column;

  justify-content: center;

  padding: 4rem;

  @media (max-width: 1100px) {
    padding: 3rem;
  }

  @media (max-width: 600px) {
    padding: 2rem;
  }
`;

const ProjectNumber = styled.span`
  color: var(--color-brand);

  font-family: var(--font-mono);

  font-size: 0.7rem;

  font-weight: 600;

  letter-spacing: 0.08em;
`;

const ProjectTitle = styled.h3`
  margin-top: 1rem;

  color: var(--color-text);

  font-size: clamp(1.75rem, 3vw, 2.75rem);

  font-weight: 700;

  letter-spacing: -0.045em;
`;

const ProjectDescription = styled.p`
  margin-top: 1.25rem;

  color: var(--color-text-muted);

  font-size: 0.95rem;

  line-height: 1.8;
`;

const Technologies = styled.div`
  display: flex;

  flex-wrap: wrap;

  gap: 0.5rem;

  margin-top: 2rem;
`;

const Technology = styled.span`
  display: inline-flex;

  align-items: center;

  min-height: 30px;

  padding: 0 0.7rem;

  border: 1px solid var(--color-border);

  border-radius: 999px;

  background: var(--color-background-alt);

  color: var(--color-text-muted);

  font-family: var(--font-mono);

  font-size: 0.65rem;
`;

const ProjectLinks = styled.div`
  display: flex;

  flex-wrap: wrap;

  gap: 1rem;

  margin-top: 2rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;

  align-items: center;

  gap: 0.5rem;

  color: var(--color-text);

  font-size: 0.8rem;

  font-weight: 600;

  transition:
    color var(--transition-fast),
    transform var(--transition-fast);

  &:hover {
    color: var(--color-brand);

    transform: translateY(-1px);
  }
`;

const ProjectImageWrapper = styled.div`
  position: relative;
  display: flex;
  min-height: 500px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-right: 1px solid var(--color-border);
  background: var(--color-background);

  @media (max-width: 900px) {
    min-height: 380px;
    border-right: 0;
    border-bottom: 1px solid var(--color-border);
  }
`;

const ProjectImage = styled.img`
  position: relative;
  z-index: 1;
  width: 82%;
  height: 82%;
  object-fit: contain;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: 0 30px 70px rgb(0 0 0 / 12%);
  transition:
    transform var(--transition-normal),
    box-shadow var(--transition-normal);

  ${Project}:hover & {
    transform: translateY(-4px);
    box-shadow: 0 36px 80px rgb(0 0 0 / 16%);
  }

  @media (max-width: 900px) {
    width: 78%;
    height: 78%;
  }
`;

const VisualGlow = styled.div`
  position: absolute;
  top: 15%;
  right: 10%;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: var(--color-brand);
  opacity: 0.1;
  filter: blur(90px);
  pointer-events: none;
`;

const ComingSoonVisual = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 500px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--color-background);

  @media (max-width: 900px) {
    min-height: 380px;
  }
`;

const ComingSoonGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, var(--color-border) 1px, transparent 1px),
    linear-gradient(to bottom, var(--color-border) 1px, transparent 1px);
  background-size: 56px 56px;
  opacity: 0.4;
`;

const ComingSoonWindow = styled.div`
  position: relative;
  z-index: 1;
  width: min(78%, 460px);
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: 0 30px 70px rgb(0 0 0 / 12%);
  transform: rotate(-2deg);
`;

const ComingSoonWindowHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  height: 38px;
  padding: 0 1rem;
  border-bottom: 1px solid var(--color-border);
`;

const ComingSoonDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-border);
`;

const ComingSoonWindowBody = styled.div`
  padding: 2rem;
`;

const ComingSoonLine = styled.div<{
  $width: string;
}>`
  width: ${({ $width }) => $width};
  height: 8px;
  margin-bottom: 0.8rem;
  border-radius: 999px;
  background: var(--color-border);
`;

const ComingSoonCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-top: 2rem;
`;

const ComingSoonCard = styled.div`
  height: 80px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-background-alt);
`;

const ComingSoonBadge = styled.div`
  position: absolute;
  right: 10%;
  bottom: 18%;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.8rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-surface);
  color: var(--color-brand);
  font-family: var(--font-mono);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  box-shadow: 0 12px 30px rgb(0 0 0 / 10%);

  span {
    display: inline-flex;
    width: 20px;
    height: 20px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--color-brand);
    color: var(--color-white);
    font-size: 0.9rem;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: rgb(0 0 0 / 55%);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  @media (max-width: 600px) {
    padding: 0;
  }
`;

const Modal = styled.div`
  display: flex;
  width: min(1200px, 100%);
  max-height: min(900px, 92vh);
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  background: var(--color-background);
  box-shadow: 0 40px 120px rgb(0 0 0 / 30%);

  @media (max-width: 600px) {
    max-height: 100vh;
    border: 0;
    border-radius: 0;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-surface);
`;

const ModalTitle = styled.h3`
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 700;
`;

const ModalClose = styled.button`
  display: inline-flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  background: var(--color-background);
  color: var(--color-text-muted);
  cursor: pointer;
  transition:
    border-color var(--transition-fast),
    background var(--transition-fast),
    color var(--transition-fast),
    transform var(--transition-fast);

  &:hover {
    border-color: var(--color-brand);
    background: var(--color-brand);
    color: var(--color-white);
    transform: rotate(90deg);
  }
`;

const ModalContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 2rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: var(--color-border);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-brand);
  }

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export {
  Description,
  Eyebrow,
  EyebrowDot,
  Header,
  HeaderCopy,
  Highlight,
  Metric,
  MetricLabel,
  MetricValue,
  Project,
  ProjectContent,
  ProjectDescription,
  ProjectLink,
  ProjectLinks,
  ProjectNumber,
  ProjectTitle,
  ProjectVisual,
  ProjectsList,
  Section,
  Technology,
  Technologies,
  Title,
  ViewAll,
  VisualGlow,
  VisualGrid,
  VisualWindow,
  WindowBody,
  WindowDot,
  WindowHeader,
  WindowLine,
  WindowMain,
  WindowMetric,
  WindowSidebar,
  ProjectImage,
  ProjectImageWrapper,
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
  Modal,
  ModalClose,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
};
