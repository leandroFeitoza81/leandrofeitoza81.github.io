import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('App', () => {
  it('Render_DefaultState_ShouldShowAllNavigationLinks', () => {
    render(<App />);

    const navigation = screen.getByRole('navigation');
    for (const label of ['Home', 'Sobre', 'Skills', 'Trajetória', 'Projetos', 'Contato']) {
      expect(navigation).toHaveTextContent(label);
    }
  });

  it('Render_DefaultState_ShouldNotMentionRemovedBrandName', () => {
    const { container } = render(<App />);

    expect(container).not.toHaveTextContent(/trybe/i);
  });

  it('Avatar_ImageFails_ShouldRenderInitialsFallback', () => {
    render(<App />);

    fireEvent.error(screen.getByRole('img', { name: /foto de perfil/i }));

    expect(screen.queryByRole('img', { name: /foto de perfil/i })).not.toBeInTheDocument();
    expect(screen.getAllByText('LF').length).toBeGreaterThan(0);
  });

  it('Projects_DefaultState_ShouldLinkToGithubRepositories', () => {
    render(<App />);

    const links = screen.getAllByRole('link', { name: /ver código/i });

    expect(links[0]).toHaveAttribute('href', 'https://github.com/leandroFeitoza81/yake-shave');
  });
});
