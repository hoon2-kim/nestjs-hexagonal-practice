// 도메인 엔티티 - 비지니스 로직과 규칙 표현
export class UserEntity {
  constructor(
    private _email: string,
    private _name: string,
    private _lastName: string,
    private _id?: number,
  ) {}

  get id(): number | undefined {
    return this._id;
  }

  get email(): string {
    return this._email;
  }

  get name(): string {
    return this._name;
  }

  get lastName(): string {
    return this._lastName;
  }

  public static create(user: {
    email: string;
    name: string;
    lastName: string;
  }): UserEntity {
    return new UserEntity(user.email, user.name, user.lastName);
  }

  public static fromPrisma(user: {
    email: string;
    name: string;
    lastName: string;
    id: number;
  }): UserEntity {
    return new UserEntity(user.email, user.name, user.lastName, user.id);
  }
}
