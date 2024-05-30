import photographyBackgroundLarge from '~/assets/vb-large.jpg';
import photographyBackgroundPlaceholder from '~/assets/photography-background-placeholder.jpg';
import photographyBackground from '~/assets/vb.jpg';
import photographyBannerLarge from '~/assets/p1-large.jpg';
import photographyBannerPlaceholder from '~/assets/photography-banner-placeholder.jpg';
import photographyBanner from '~/assets/p1.jpg';
import photographyBookLarge from '~/assets/p2-large.jpg';
import photographyBookPlaceholder from '~/assets/photography-book-placeholder.png';
import photographyBook from '~/assets/p2.jpg';
import photographySlide1Large from '~/assets/slider-1-large.jpg';
import photographySlide1 from '~/assets/slider-1.jpg';
import photographySlide2Large from '~/assets/slider-2-large.jpg';
import photographySlide2 from '~/assets/slider-2.jpg';
import photographySlide3Large from '~/assets/slider-3-large.jpg';
import photographySlide3 from '~/assets/slider-3.jpg';
import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment, Suspense, lazy } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './photography-knight.module.css';

const Carousel = lazy(() =>
  import('~/components/carousel').then(module => ({ default: module.Carousel }))
);

const Armor = lazy(() => import('./armor').then(module => ({ default: module.Armor })));

const title = 'Photography';
const description =
  'I like to take photos of nature, landscapes, and architecture. I also enjoy taking photos of my travels and the people I meet along the way. I’m always looking for new opportunities to take photos and collaborate with others on projects. If you’re interested in working together, feel free to get in touch with me. I’m always open to new ideas and projects.';
const roles = ['Edited with: ','Adobe Photoshop', 'Adobe Lightroom'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export function photographyKnight() { 
  return (
    <Fragment>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --primary: oklch(87.71% 0.084 85.29);
              --accent: oklch(87.71% 0.084 85.29);
            }
            [data-theme='light'] {
              --primary: oklch(52.25% 0.121 81.53);
              --accent: oklch(52.25% 0.121 81.53);
            }
          `,
        }}
      />
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${photographyBackground} 1280w, ${photographyBackgroundLarge} 1920w`}
          width={1280}
          height={720}
          placeholder={photographyBackgroundPlaceholder}
          opacity={0.5}
        />
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="Get the mod"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${photographyBanner} 800w, ${photographyBannerLarge} 1100w`}
              width={800}
              height={436}
              placeholder={photographyBannerPlaceholder}
              alt="Nature photo with green trees and water"
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              srcSet={`${photographyBook} 490w, ${photographyBookLarge} 960w`}
              width={480}
              height={300}
              placeholder={photographyBookPlaceholder}
              alt="Flower with beautiful colors"
              sizes={`(max-width: ${media.mobile}px) 90vw, (max-width: ${media.tablet}px) 80vw, 70vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Suspense>
              <Carousel
                images={[
                  {
                    srcSet: `${photographySlide1} 960w, ${photographySlide1Large} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'Photo of leaf',
                  },
                  {
                    srcSet: `${photographySlide2} 960w, ${photographySlide2Large} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'Photo from safranbolu',
                  },
                  {
                    srcSet: `${photographySlide3} 960w, ${photographySlide3Large} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'Pink rose with water drops.',
                  },
                ]}
                width={1920}
                height={1080}
              />
            </Suspense>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
