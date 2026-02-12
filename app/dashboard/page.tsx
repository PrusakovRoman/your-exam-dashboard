import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Trophy,
    Zap,
    Target,
    Sparkles,
    Flame,
    Award,
    Star,
    ChevronRight,
    Crown,
    BookOpen,
    BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";

const studentData = {
    name: "Алексей",
    grade: 11,
    totalSolved: 1247,
    totalProblems: 1850,
    passedNumbers: "23/27",
    experience: 3410,
    streak: 8,
    favoriteTask: {
        number: 8,
        topic: "Программирование",
        solved: 142,
        accuracy: 94
    },
    masteredBlock: {
        name: "Системы счисления",
        solved: 89,
        total: 95,
        accuracy: 94
    },
    rank: 7
};

const leaderboardData = [
    { id: 1, name: "Екатерина", experience: 5840, rank: 1, avatar: "Е" },
    { id: 2, name: "Дмитрий", experience: 5210, rank: 2, avatar: "Д" },
    { id: 3, name: "София", experience: 4890, rank: 3, avatar: "С" },
    { id: 4, name: "Артем", experience: 4520, rank: 4, avatar: "А" },
    { id: 5, name: "Полина", experience: 4210, rank: 5, avatar: "П" },
    { id: 6, name: "Иван", experience: 3980, rank: 6, avatar: "И" },
    { id: 7, name: "Алексей", experience: 3410, rank: 7, avatar: "А", isCurrentUser: true },
    { id: 8, name: "Мария", experience: 3250, rank: 8, avatar: "М" },
    { id: 9, name: "Никита", experience: 2980, rank: 9, avatar: "Н" },
    { id: 10, name: "Анна", experience: 2750, rank: 10, avatar: "А" },
    { id: 11, name: "Владимир", experience: 2540, rank: 11, avatar: "В" },
    { id: 12, name: "Ксения", experience: 2310, rank: 12, avatar: "К" },
    { id: 13, name: "Григорий", experience: 2150, rank: 13, avatar: "Г" },
    { id: 14, name: "Татьяна", experience: 1980, rank: 14, avatar: "Т" },
    { id: 15, name: "Роман", experience: 1820, rank: 15, avatar: "Р" },
];

const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('ru-RU').format(num);
};

export default function DashboardPage() {
    return (
        <main>
            <div className="container mx-auto p-4 xs:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    <div className="lg:col-span-7 xl:col-span-8 space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Card className="border-l-4 border-l-primary shadow-sm hover:shadow-lg transition-all bg-gradient-to-br from-white to-primary-soft/30">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Target className="w-4 h-4 text-green-600" />
                                        Всего решено
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-4xl font-bold text-primary">
                                        {formatNumber(studentData.totalSolved)}
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">заданий</p>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-l-accent-blue shadow-sm hover:shadow-lg transition-all bg-gradient-to-br from-white to-info-soft/30 relative">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Sparkles className="w-4 h-4 text-blue-600" />
                                        Пройдено номеров
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-4xl font-bold text-primary">
                                        {studentData.passedNumbers}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <Card className="border-l-4 border-l-accent-amber shadow-sm hover:shadow-lg transition-all bg-gradient-to-br from-white to-warning-soft/30">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Award className="w-4 h-4 text-orange-600" />
                                        Опыт
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="text-4xl font-bold text-primary">
                                                {formatNumber(studentData.experience)}
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-1">всего опыта</p>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <div className="flex items-center gap-1 bg-primary-soft/50 px-3 py-1.5 rounded-full border border-primary/20">
                                                <span className="text-sm font-bold text-gray-700">5</span>
                                                <ChevronRight className="w-3 h-3 text-primary" />
                                                <span className="text-sm font-bold text-primary">6</span>
                                            </div>
                                            <span className="text-[10px] text-muted-foreground mt-1">след. уровень</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="lg:col-span-5 xl:col-span-4">
                        <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-primary-soft/20 overflow-hidden">
                            <CardHeader className="border-b border-primary/10 pb-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-md">
                                            <Trophy className="w-5 h-5 text-yellow-600" />
                                        </div>
                                        <CardTitle className="text-lg font-bold text-foreground">
                                            Рейтинг учеников
                                        </CardTitle>
                                    </div>
                                    <Badge className="bg-primary-soft text-primary-dark border-0 text-xs px-3 py-1 font-medium">
                                        {leaderboardData.length} участников
                                    </Badge>
                                </div>
                            </CardHeader>

                            <CardContent className="p-0">
                                <ScrollArea className="h-[410px]">
                                    <div className="divide-y divide-primary/10">
                                        {leaderboardData.map((user) => (
                                            <div
                                                key={user.id}
                                                className={`
                flex items-center gap-4 px-5 py-3 transition-all duration-200
                ${user.isCurrentUser
                                                        ? 'bg-primary-soft 0 sticky top-0'
                                                        : 'hover:bg-primary-soft/30'
                                                    }
              `}
                                                style={user.isCurrentUser ? {
                                                    position: 'sticky',
                                                    top: '0',
                                                    zIndex: 10,
                                                    marginLeft: '-1px'
                                                } : {}}
                                            >
                                                {/* Медальки для топ-3, иначе просто номер */}
                                                <div className="flex-shrink-0 w-7 h-7">
                                                    {user.rank === 1 ? (
                                                        <div className="w-full h-full bg-accent-gold rounded-full flex items-center justify-center shadow-sm">
                                                            <span className="text-xs font-bold text-white">1</span>
                                                        </div>
                                                    ) : user.rank === 2 ? (
                                                        <div className="w-full h-full bg-accent-silver rounded-full flex items-center justify-center shadow-sm">
                                                            <span className="text-xs font-bold text-gray-800">2</span>
                                                        </div>
                                                    ) : user.rank === 3 ? (
                                                        <div className="w-full h-full bg-accent-bronze rounded-full flex items-center justify-center shadow-sm">
                                                            <span className="text-xs font-bold text-white">3</span>
                                                        </div>
                                                    ) : (
                                                        <div className={`
                    w-full h-full rounded-full flex items-center justify-center text-xs font-medium
                    ${user.isCurrentUser
                                                                ? 'bg-primary text-white'
                                                                : 'bg-primary-soft text-primary-dark'
                                                            }
                  `}>
                                                            {user.rank}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Аватар */}
                                                <div className={`
                flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium
                ${user.isCurrentUser
                                                        ? 'bg-gradient-to-br from-primary to-primary-dark text-white'
                                                        : 'bg-primary-soft text-primary-dark'
                                                    }
              `}>
                                                    {user.avatar}
                                                </div>

                                                {/* Имя и опыт */}
                                                <div className="flex-1 min-w-0">
                                                    <p className={`
                  text-sm font-medium truncate
                  ${user.isCurrentUser ? 'text-primary-dark' : 'text-foreground'}
                `}>
                                                        {user.name}
                                                        {user.isCurrentUser && (
                                                            <span className="ml-1 text-xs text-primary">(вы)</span>
                                                        )}
                                                    </p>
                                                    <p className="text-xs text-muted-foreground">
                                                        {formatNumber(user.experience)} XP
                                                    </p>
                                                </div>

                                                {/* Уровень */}
                                                <Badge variant="outline" className="text-[10px] px-2 py-0.5 h-5 bg-white/50 border-primary/20 text-primary-dark font-medium">
                                                    lvl {Math.floor(user.experience / 1000)}
                                                </Badge>
                                            </div>
                                        ))}
                                    </div>
                                </ScrollArea>
                            </CardContent>

                            {/* Футер карточки рейтинга */}
                            <div className="p-4 border-t border-primary/10 bg-gradient-to-r from-primary-soft/20 to-accent-blue/5">
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-muted-foreground flex items-center gap-1">
                                        <Zap className="w-3.5 h-3.5 text-primary" />
                                        обновлено 1 мин назад
                                    </span>
                                    <span className="text-foreground font-medium bg-white/50 px-2 py-1 rounded-full border border-primary/20 text-primary-dark">
                                        1000 XP = 1 lvl
                                    </span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
    );
}